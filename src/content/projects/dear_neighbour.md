## Introduction

Dear Neighbour is a fictional Russian grocery retail chain operating stores in different formats across several regions of Russia, including some of the country's most populous regions.

I was given a dataset covering the company's business activity in 2024 and 2025. The task was to turn this data into a dashboard that provides a clearer picture of the business and its performance.

<details>
<summary>Where the data came from</summary>

This project was completed as part of the Simulative Data Analytics course. The dataset was provided by the course tutor and is synthetic, created for educational purposes.

*Dear Neighbour* is my English translation of the fictional Russian brand name *Соседушка*. Any resemblance to real businesses or brands is purely coincidental.

The original dataset was in Russian, so I translated it into English using Python. The process is documented in the [translation notebook](https://github.com/TAbramovskaya/dear-neighbour/blob/main/python/translate_workbook.ipynb) in the project's GitHub repository.

</details>

The source data came in XLSX format and was already well-structured, with a separate sheet for each entity in the data model. No additional data cleaning was needed, so I moved straight to Power BI.

I started with a few questions: How had sales performance changed between 2024 and 2025? Which trends stood out? And were there any potential problems hidden behind the overall results?

At first glance, the picture looked positive. Revenue, average transaction value, transaction count, and units sold all increased compared with 2024. However, gross margin moved in the opposite direction, declining from the second quarter onward. This raised the main question I wanted to explore: what might explain the decline in margin despite the overall growth in sales?

This question became the starting point for the dashboard and guided the subsequent analysis.

<details>
<summary>What about customer loyalty and store traffic?</summary>

The dataset also had some limitations that affected which areas were worth exploring in depth. For example, the recorded average daily store traffic was approximately 1.5 visitors per store, which appears unrealistic for a grocery retail chain.

The customer data also offered limited opportunities for analysing loyalty programme performance. All transactions recorded in 2024 and 2025 were associated with loyalty cards registered before 2024, and no new customers were registered during the period.

These characteristics made store traffic and customer acquisition difficult to assess meaningfully. I therefore focused primarily on sales performance and the factors that could help explain the change in gross margin.

</details>

### Investigating the decline in gross margin

To better understand the decline in gross margin, I carried out a separate analysis in Python, looking at both product category margins and changes in the sales mix between 2024 and 2025.

The results suggest that changes in sales mix played a larger role than changes in margins within individual categories across most product categories. The full analysis, including the decomposition methodology and category-level results, is available in the [gross margin analysis notebook](https://github.com/TAbramovskaya/dear-neighbour/blob/main/python/margin_decline_analysis.ipynb).

Alcohol made the largest negative contribution to the overall change, while ready-made food, dairy, snacks, and groceries also contributed negatively, mainly due to shifts in sales mix. In contrast, beverages and fish and seafood made positive contributions, although the reasons differed between the two categories.

This gave me a more specific direction for the Power BI analysis: rather than looking at sales growth alone, I could examine how the distribution of revenue across product categories related to overall profitability.

