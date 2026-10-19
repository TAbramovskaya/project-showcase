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

At first glance, the picture looked positive. Revenue, average transaction value, transaction count, and units sold all increased compared with 2024. However, gross margin moved in the opposite direction, declining from the second quarter onward. This raised the main question I wanted to explore: what might explain the decline in margin despite the overall growth in sales?

This question became the starting point for the dashboard and guided the subsequent analysis.

<details>
<summary>About data limitations</summary>

The dataset had some limitations that affected which areas were worth exploring in depth. For example, the recorded average daily store traffic was approximately 1.5 visitors per store, which appears unrealistic for a grocery retail chain.

The customer data also offered limited opportunities for analysing loyalty programme performance. All transactions recorded in 2024 and 2025 were associated with loyalty cards registered before 2024, and no new customers were registered during the period.

These characteristics made store traffic and customer acquisition difficult to assess meaningfully. I therefore focused primarily on sales performance and the factors that could help explain the change in gross margin.

</details>

### Investigating the decline in gross margin

To better understand the decline in gross margin, I compared the *mix effect* — the impact of changes in the distribution of sales across product categories — with the *within-category margin effect*, which captures changes in gross margin within individual categories.

The results suggest that changes in sales mix played the larger role in the year-on-year change in gross margin across most categories, although the balance between the two effects varied by category.

`Fish and seafood` provides a good example: the positive mix effect contributed approximately `+0.19` percentage points, while the within-category margin effect contributed `−0.04` percentage points. Together, these effects resulted in a net positive contribution of approximately `+0.15` percentage points to the year-on-year change in gross margin within the category.

<img src="/images/projects/dear_neighbour/mix_effect_vs_within_category_margin_effect.png" class="img-white"/>

The full analysis, including the decomposition methodology and category-level results, is available in the [gross margin analysis notebook](https://github.com/TAbramovskaya/dear-neighbour/blob/main/python/margin_decline_analysis.ipynb).

This gave me a more specific direction for the Power BI analysis: rather than looking at sales growth alone, I could examine how the distribution of revenue across product categories related to overall profitability.

