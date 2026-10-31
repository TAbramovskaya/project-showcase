Dear Neighbour is a fictional Russian grocery retail chain operating across several regions of Russia.

On the surface, 2025 looks like a successful year for the business. But not everything is as positive as it first seems. Gross margin began to decline, and the results towards the end of the year provide further cause for concern.

I used Power BI to explore the company's performance and investigate what might be behind these warning signs.

### The Data and the Task

I was given a dataset covering the company's business activity in 2024 and 2025. The task was to turn this data into a dashboard that provides a clearer picture of the business and its performance.

<details>
<summary>Where the data came from</summary>

This project was completed as part of the Simulative Data Analytics course. The dataset was provided by the course tutor and is synthetic, created for educational purposes.

*Dear Neighbour* is my English translation of the fictional Russian brand name *Соседушка*. Any resemblance to real businesses or brands is purely coincidental.

The original dataset was in Russian, so I translated it into English using Python. The process is documented in the [translation notebook](https://github.com/TAbramovskaya/dear-neighbour/blob/main/python/translate_workbook.ipynb) in the project's GitHub repository.

The [source data](https://github.com/TAbramovskaya/dear-neighbour/blob/main/viz/dear_neighbour.xlsx) came in XLSX format and was already well-structured, with a separate sheet for each entity in the data model. No additional data cleaning was required. However, I first explored the dataset to understand its structure and identify characteristics that could affect the analysis due to its synthetic nature. This initial review is documented in a [data overview notebook](https://github.com/TAbramovskaya/dear-neighbour/blob/main/python/data_overview.ipynb).

</details>

I started with a few questions: How had sales performance changed between 2024 and 2025? Which trends stood out? And were there any potential problems hidden behind the overall results?

The table below summarises the key metrics for 2024 and 2025, along with their year-over-year changes.

<img src="/images/projects/dear_neighbour/year_on_year_summary.png" class="img-white" style="width: 65%;"/>

Revenue, gross profit, average transaction value all increased compared with 2024, however, gross margin moved in the opposite direction. Let's explore these two questions in more detail: what was driving sales growth, and what might explain the decline in gross margin despite that growth?

<details>
<summary>About data limitations</summary>

The dataset had some limitations that affected which areas were worth exploring in depth. For example, the recorded average daily store traffic was approximately 1.5 visitors per store, which appears unrealistic for a grocery retail chain.

The customer data also offered limited opportunities for analysing loyalty programme performance. All transactions recorded in 2024 and 2025 were associated with loyalty cards registered before 2024, and no new customers were registered during the period. This made it difficult to draw meaningful conclusions about customer acquisition or changes in loyalty programme participation.

Another limitation concerns historical product costs. Purchase costs were available in the product table rather than at the transaction level, so I had to use the same available cost values to calculate COGS for both years. Although average selling prices appeared relatively stable, this does not tell us whether purchase costs also remained stable. As a result, the gross margin comparison may not fully reflect changes in actual costs over time.

These characteristics made store traffic and customer acquisition difficult to assess meaningfully. I therefore focused primarily on sales performance and the factors that could help explain the change in gross margin.

</details>

### What is driving sales growth?

The dataset contains 14 product categories, 49 subcategories, and just 100 distinct products. With only about two products per subcategory on average, analysing individual products would add limited detail. I therefore chose subcategories as the main level of analysis, providing enough detail to explore differences without making the analysis unnecessarily granular. 

The first three charts show year-over-year changes in revenue, units sold, and the number of receipts within each subcategory. All three indicators increased across subcategories, with growth reaching approximately 20%.

<img src="/images/projects/dear_neighbour/revenue_change_units_sold_change_receipts_change.png" class="img-white" style="width: 100%;"/>

However, growth within subcategories does not necessarily mean that their relative importance changed. Let's look at changes in each subcategory’s share of total annual revenue and units sold. (Receipt shares are not included, as a single receipt can contain products from multiple subcategories.) The charts still show a downward pattern in line with the subcategories’ ranking, but the changes in category shares are very small. So overall sales mix remained broadly stable. 

<img src="/images/projects/dear_neighbour/revenue_share_change_units_sold_share.png" class="img-white" style="width: 90%;"/>

Finally, let's look at year-over-year changes in the average value of products from each subcategory per receipt and in revenue per unit. Unlike the previous charts, these indicators fluctuate around zero and do not follow the descending order of revenue growth used to arrange the subcategories.

<img src="/images/projects/dear_neighbour/avg_subcategory_value_per_receipt_change_revenue_per_unit_change.png" class="img-white" style="width: 90%;"/>

Subcategories with stronger revenue growth did not consistently show larger increases in average receipt value or revenue per unit.

The [sales drivers notebook](https://github.com/TAbramovskaya/dear-neighbour/blob/main/python/sales_drivers.ipynb) includes these and additional metrics and visualisations, along with the calculations behind them.

Taken together, the results suggest that sales growth was primarily associated with higher transaction counts and more units sold, rather than a broad increase in revenue per unit. At the same time, we can see some shifts in the distribution of sales across product subcategories. This gives us a starting point for investigating the second question: what might explain the decline in gross margin?

### Investigating the decline in gross margin

The overall gross margin decline was relatively small: approximately 0.11 percentage points, with annual gross margin remaining above 26%. Given the synthetic nature of the dataset, this change may reflect variation in the generated data rather than a meaningful underlying business trend. Still, I wanted to investigate where the decline came from within the available data. 

I compared the *mix effect* — the impact of changes in the relative revenue shares of product categories — with the *within-category margin effect*, which captures changes in gross margin within individual product categories. See the [gross margin analysis notebook](https://github.com/TAbramovskaya/dear-neighbour/blob/main/python/margin_decline_analysis.ipynb) for the analysis, decomposition methodology and category-level results.

<details> 
<summary>Why categories this time?</summary>
For this part of the analysis, I moved from subcategories to product categories. The additional detail at subcategory level did not change the overall conclusions, while presenting just 14 categories made the results easier to interpret.
</details>

<img src="/images/projects/dear_neighbour/mix_effect_vs_within_category_margin_effect.png" class="img-white" style="width: 65%;"/>

`Fish and seafood` provides a good example: the positive mix effect contributed approximately `+0.19` percentage points, while the within-category margin effect contributed `−0.04` percentage points. Together, these effects resulted in a net positive contribution of approximately `+0.15` percentage points to the year-over-year change in overall gross margin.

`Fish and seafood` provides a good example. The category’s share of total revenue increased from `17.48%` in 2024 to `18.28%` in 2025, while its gross margin decreased slightly from `23.93%` to `23.71%`. The increase in revenue share contributed approximately `+0.19` percentage points to the year-over-year change in overall gross margin, while the decline in the category’s own margin contributed `−0.04` percentage points. Together, these effects resulted in a net positive contribution of approximately `+0.15` percentage points to the change in overall gross margin.

The results suggest that changes in sales mix played the larger role in the year-over-year change in gross margin across most categories, although the balance between the two effects varied by category.

<details>
<summary>Are these results surprising?</summary>

Not really. The outcome was already fairly predictable from the previous section on sales growth drivers. Costs stayed unchanged in the dataset, while selling prices fluctuated only slightly and seemingly at random, so changes in category-level gross margins were minimal. But I do love a good formula. Maths is cool.

</details>

The visualisation below shows year-over-year changes in revenue share across product categories. The five categories with the highest gross margins in 2025 are highlighted in a darker colour, making it easier to see how the revenue mix shifted for the most profitable categories. 

<img src="/images/projects/dear_neighbour/revenue_share_change.png" class="img-white" style="width: 75%;"/>

The `ready-to-eat meals`, the category with the highest gross margin, ranked 11th out of 14 in terms of revenue share change, indicating a decline in its share of total revenue. `Fish and seafood`, by contrast, ranked first in revenue share growth despite ranking only 11th out of 14 in gross margin. 

### Building the dashboard

The findings were brought together in an [interactive Power BI dashboard](https://github.com/TAbramovskaya/dear-neighbour/blob/main/viz/Dear%20Neighbour%20Sales.pbix), designed to present overall business performance while highlighting less obvious patterns uncovered during the analysis.

I divided the dashboard into two pages, each focusing on a different aspect of the business.

**Sales Overview** provides a high-level view of key performance indicators and overall trends, with a closer look at changes in gross margin. 

<img src="/images/projects/dear_neighbour/dashboard_sales_overview.png" class="img-white" style="width: 100%;"/>

It also allows users to explore performance by city, which is useful because growth in 2025 was limited in some locations and the overall figures do not tell the whole story.

**Products and Discounts** focuses on monthly changes in average transaction value and transaction volume, as well as differences in gross profit and discount levels across product subcategories. 

<img src="/images/projects/dear_neighbour/dashboard_products_and_discounts.png" class="img-white" style="width: 100%;"/>

The bar charts show the 15 subcategories with the highest gross profit, ranked in descending order, alongside the share of gross profit accounted for by discounts. Keeping the subcategories in the same order makes it easier to compare their gross profit with the relative scale of discounts.
