My favorite Telegram features are mute, grouping, and the ability to mark lots of messages as read without even scrolling through them. I figured out a comfortable filtering setup for email a long time ago: a booking confirmation email will arrive in my inbox, but it won’t scream for attention in bold, won’t inflate the unread counters, and will quietly land in the right folder, hidden until I actually need it. Telegram seems to follow the same principles and even has filtering, but those overwhelming unread counters won’t disappear until you manually do a couple of clicks. Not a huge problem — I only archive and mute channels or chats when I know nothing terrible will happen if I stop checking them for a while (but for some reason I still don’t want to unsubscribe).

But then something happened: one channel (a bot chat from Simulative called “Simulative: Events”), which I originally subscribed to specifically to “stay informed”, started aggressively demanding to be marked as read. I noticed a few possible reasons why this happened. They’re all very subjective, so I’ll keep saying “it seems”.

First, it seems like there are simply too many messages now. When I first launched the bot, there were fewer of them.

Second, besides this chat, I also subscribed to another one — “Simulative” — and it seems like most of the messages overlap. Most, but not all: each chat still has some unique content, which makes it hard to keep only one of them. (I can only guess why I was given links to different bots for essentially the same purpose.) And then there’s also the Simulative email newsletter — which, it seems, almost always duplicates one or both of the chats.

Third, it seems like the messages became too long. This creates two opposite feelings at once: on the one hand, it makes the content feel important; on the other, it raises suspicion that the texts are being heavily processed by AI. The first feeling makes me hesitate before marking things as read, while the second creates the sense that I’m reading not only what the author wanted to say, but also whatever some LLM decided to “polish up nicely”.

And fourth (this was the moment I decided to start this project): the channel introduced spin-to-win game. And a three-door game with a hidden prize. And that definitely wasn’t my imagination.

### So what’s the actual problem?
  
All of this together creates a very subjective feeling of content “aggressiveness”. The biggest discount is expiring yet again; a webinar I didn’t attend supposedly caused an explosion of positive feedback; a seasoned mentor is explaining what I absolutely must read if I want things to go well — meanwhile, my browser tabs have already turned into a wall of tiny favicons.

### So what am I going to do about it?

This is just complaining, you might say. Yes, exactly! And I’m going to get something useful out of it, because one does not simply refuse to analyze data when it is available.

I’m going to figure out which things only seem true to me, and which ones actually are. As the basis for analysis, I used exports from the two chats mentioned above plus the email newsletter. I’ll call them Intensives, Events, and Mailbox. These will be the message _sources_.

The data for Events and Mailbox starts in September 2025; for Intensives, in October. Subjectively, I started noticing the problems described above toward the end of 2025, and by March–April 2026 they seemed to reach their peak.

<details>
  <summary>About the sources, and how I got trapped by them</summary>

  Both bots — “Simulative” and “Simulative: Events” — belong to the same educational project, Simulative. Launching them (at different times) was required in order to participate in some useful activity. At first, these chats only sent reminders about that specific activity. Then information about upcoming ones started appearing too. Little by little, the chats transformed into something closer to news channels, and the content became more varied. The messages were indeed similar, but not identical, and there still weren’t that many of them. Then, at some point, something went wrong.

  The first time I seriously wanted to stop these bots was toward the end of 2025. I developed a strong suspicion that the bots were being run by several different people (or several bots) who weren’t always aware of each other’s plans. But once I didn’t stop them immediately, I realized it had become oddly entertaining to watch. And only by not stopping them did I end up with this beautifully uninterrupted digital [kommunalka](https://en.wikipedia.org/wiki/Communal_apartment).

</details>

A bit about the data. During the export process, only the content of text messages was extracted; all other message types contain metadata only, while their actual content (images, video messages, documents) was ignored. All messages will be analyzed to estimate the daily message volume, but only the text from text messages will be analyzed for length, duplicates, authorship, content, stylistic features, and LLM-based processing.

## How messages change over time

I’ll start by counting duplicates to understand whether, in the later analysis, I should consider all three sources or whether it’s enough to rely on just one of them.

### About duplicates

By _duplicates_, I mean _very similar_ text messages from _different_ sources _on the same day_.

<details>
  <summary>How did I detect duplicates?</summary>

  Usually, it’s visually obvious which messages are basically copy-pasted versions of each other. But if you compare the raw text as exact string matches, many messages that are clearly “the same” turn out to be different. Remove a non-breaking space — the strings don’t match anymore.

  But it’s not just about whitespace. Even when the content differs slightly, you still immediately recognize it as “I’ve just seen this”. For example, the wording of a promotion might change at the end of the message, or one version might use first-person phrasing while another switches to third-person.

  So, to detect duplicates, I convert each string into a sequence of Cyrillic words separated by single spaces. I then compare these processed strings by finding the longest overlapping substrings of consecutive words. After that, I empirically set a threshold for the overlap length: if the overlap between two messages exceeds this value, they are marked as duplicates.

  For example, a message like

  > Hurry and grab your spot on the departing train with a maximum 30% discount! The discount expires tomorrow!

  which appears across different channels will not be marked as a duplicate. It’s too short to be annoying, so it gets away with it.

  Below is the distribution of the resulting overlap coefficient (the ratio between the length of the matching fragment and the total message length) among duplicate messages.

  <img src="/images/projects/multi_channel/overlap_score.png" class="img-white"/>

</details>

As mentioned earlier, only text messages were checked for duplication. In the chart, the volume of text messages for the Events source is overlaid with the volume of duplicates. (From this point on, a 7-day rolling average is used to smooth out daily fluctuations in both the number of messages and the number of duplicates.)

<img src="/images/projects/multi_channel/text_message_and_cross_duplicates_events.png" class="img-white"/>

The situation is similar for the other sources too — all of them show a comparable level of heavy duplication (you can view this on [Tableau Public](https://public.tableau.com/views/Multi-channelcommunicationMessages/MessagesWordsDuplicates?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)).

From this point on, I’ll focus on the Events source — it has the longest continuous message history, which is exactly what I’m interested in for the next part of the analysis.

### Counting messages

One of the concerns was the increasing number of messages.

<img src="/images/projects/multi_channel/daily_message_count.png" class="img-white"/>

The number of messages has indeed increased — the second half of the chart shows a fairly stable twofold growth.

What is driving this increase? We can see that both text messages and other types of content are growing. Each image in a carousel counts as +1 message. Multi-image carousel posts — or sequences of voice messages — produce the blue spikes on the right. Text messages, in contrast, are more stable. This brings us to the next question: is it actually true that messages have become longer?

<details>
  <summary>How I labeled messages by length</summary>

  200 words is roughly about 1 minute of reading. Is that a lot or a little? And what even *is* the problem with long messages? I don’t mean difficulty of comprehension here.

  Imagine I see 15 unread messages and start going through them. On my screen, I can read a message of up to ~50 words without scrolling. A 400-word message, even without fully reading it, requires 4–5 scrolls.

  The metric I use for identifying long messages is the number of words in the same processed string I used for duplicate detection. In addition to all formatting (empty lines, paragraphs), I remove emojis, numbers, punctuation, and all English characters (given that the content across all analyzed channels is in Russian). This significantly shortens the text, especially visually. So I classify messages with 150+ words (in my simplified representation) as _long_. Up to 50 words are _short_. Everything in between is considered _standard length_.

  Here is an example of a standard-length message — it contains 83 words (the original Russian-language text contains 73 words):

  > Learn now — pay later!
  > There’s no point in delaying career growth. Now in Simulative you can start studying with deferred payment — for 3 or 6 months 🔥
  > You build skills, move to a new career level — and in just six months you can pay for your education from your salary in a new profession!
  > If you’re serious about growth, this is a great opportunity to invest in yourself at the right time.
  > Start your analytics course now — the cohort begins tomorrow, and you can still join.

</details>

Among all text messages, let’s isolate long ones and look at their dynamics.

<img src="/images/projects/multi_channel/daily_text_message_count.png" class="img-white"/>

The left half of the red curve is effectively below 1, while the right portion remains consistently above 2. The number of long messages has increased — but so has everything else, because the distribution of message lengths throughout the day has not actually changed that dramatically.

<img src="/images/projects/multi_channel/message_length_distribution.png" class="img-white"/>

Even if long messages have become longer, the change is very small. The average word count in long messages fluctuates between 200 and 300 words across the entire observation period.

<img src="/images/projects/multi_channel/long_messages_length.png" class="img-white"/>

Still, the amount of reading has genuinely increased quite a lot! Below is the chart showing the average number of words per day.

<img src="/images/projects/multi_channel/daily_total_words_count.png" class="img-white"/>

Here I kept all three available channels. Notice how the blue and orange curves closely track each other!

### Extracting text features

The final trigger for all this suffering (not counting the spin-to-win game) was a general feeling of _too much pressure_: too high message density, too many calls to action and semantic elements, too much mixed content throughout the day and even within a single message.

To analyze this subjective perception more systematically, I needed to label messages using several textual features.

For each message, an LLM model (gpt-5.4-mini, [prompts on GitHub](https://github.com/TAbramovskaya/sml-multi-channel-communication/blob/main/src/ai_analysis/prompts.py)) was used to infer the likely author, estimate the degree of text transformation (i.e. how much the final version differs from the original draft), and classify the message along three dimensions: intent, content, and stylistic presentation.

The analysis covers messages from January to April 2026.

<details>
  <summary>More details</summary>

  I split the analysis into two passes.

  In the first pass, the model estimated the degree of text processing (a _transformation score_) on a 0–100 scale (the resulting scores were then grouped into 5 equal bins). The model was explicitly instructed to be conservative when assigning high scores.
  
| Score range  | Transformation Type  |
|----------------|----------------------|
| 0–20           | minimal edits        |
| 21–40          | light edits          |
| 41–60          | structural changes   |
| 61–80          | strong rewrite       |
| 81–100         | heavy reconstruction |

In the second pass, the model tried to infer the author of the message (“Simulative” if it couldn’t determine it) and assigned three tags:

- Intent — what action or response the author expects from the audience after the message.
- Content — the main subject and informational type of the message: what it is about and what kind of information it carries.
- Delivery style — how the information is communicated emotionally and rhetorically.

Each tag had a predefined set of possible values, and the model was required to choose exactly one from each class.

| Intent                |
|------------------------------|
| conversion to course enrollment |
| webinar registration         |
| educational engagement       |
| motivation and support       |
| building trust               |

**Content**

| Content               |
|-----------------------|
| promotional content   |
| practical case        |
| careers and interviews |
| industry experience   |
| student outcomes      |

| Delivery style                |
|------------------------------|
| explanatory marketing        |
| informational announcement   |
| urgency framing              |
| mentorship                   |

</details>

The transformation score differs slightly across sources.

| Statistic | Events | Intensives | Mailbox |
|----------|--------|------------|----------|
| Max      | 78.0   | 88.0       | 95.0     |
| Min      | 2.0    | 0.0        | 0.0      |
| Mean     | 23.3   | 18.0       | 33.0     |
| Median   | 20.0   | 16.0       | 25.5     |

Higher scores in the email dataset are explained by the fact that longer messages tend to receive higher scores overall (more on that below), and email contains almost no short messages. For Events, the highest scores still do not reach the lower boundary of the “heavy reconstruction” group.

From this point onward, I will focus only on Events. In the chart below, the blue bar charts show the distribution of text messages across groups — both by transformation score and by message length. The red line represents the average transformation score for each group.

<img src="/images/projects/multi_channel/average_transformation_score_across_categories.png" class="img-white"/>

The right-hand plot shows that longer messages were, on average, rated as having a higher degree of processing.

The model identified authors for 80 out of 594 messages; the rest were assigned the label *Simulative*. In the chart below, color represents the average degree of processing for each author — the lighter the color, the lower the score. The length of each step corresponds to the average message length (in number of words). Long light-colored steps or short dark ones represent deviations from the observed relationship between text length and degree of processing.

<img src="/images/projects/multi_channel/author_level_llm_processing_patterns.png" class="img-white"/>

Understanding whether my subjective perception of the channel’s content is grounded in objective factors can be approached through the relationships between the metrics of intent, content, and delivery style.

In all the tables below, color corresponds to the average message length: the grey zone (transition from orange to blue) marks the boundary between standard and long messages. Accordingly, anything shaded in blue represents messages of 150 words or more. The more saturated the orange, the shorter the messages.

What are the intentions behind the messages?

<img src="/images/projects/multi_channel/content_vs_intent.png" class="img-white"/>

According to the model’s estimates, over a 4-month period (120 days), the channel on average issued about 3.5 calls per day either to enroll in a course or to register for a webinar (“conversion to course enrollment” and “webinar registration”).

<img src="/images/projects/multi_channel/content_vs_delivery_style.png" class="img-white"/>

On average, more than once per day, readers were shown short messages with an “urgency framing” style. (Interestingly, their shortness itself also reinforces the feeling of urgency.)

For long messages, the model identifies a “mentorship” style (content tagged as “practical case”, “careers and interviews”, and “industry experience”). However, as the next table suggests, these messages often combine mentoring-style (corporate or technical) information with promotional intent (“conversion to course enrollment”, “educational engagement”).

<img src="/images/projects/multi_channel/intent_vs_delivery_style.png" class="img-white"/>

Messages with identified authors are almost never classified as “urgency framing.” But they are long!

<img src="/images/projects/multi_channel/author_vs_delivery_style.png" class="img-white"/>

<details>
  <summary>Where to explore the interactive visualizations</summary>

The charts I used can be explored interactively on Tableau Public:

* [Messages and duplicates overview](https://public.tableau.com/views/Multi-channelcommunicationMessages/MessagesWordsDuplicates?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)
* [LLM-based analysis results](https://public.tableau.com/views/Multi-ChannelCommunicationLLMresults/LLMresults?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)

There is also a calendar view where one can browse messages by author:

* [Find your favorite mentor (calendar view)](https://public.tableau.com/views/FindYourFavoriteMentor/FindYourFavoriteMentor?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)

</details>

## What did I learn?

Across all three sources, the number of messages has indeed increased. They did not become longer, but the number of long messages — and the total number of words per day — has also increased, so overall cognitive load has significantly grown. The level of duplication is very high; in my view, if one were to keep only a single bot chat, that would be the most reasonable option.

The scores assigned by the model for the degree of text processing are difficult to interpret in a fully unambiguous way. The model was instructed not to question whether a message was written by a human, but I think the guidelines could have been specified in more detail (right now they are mostly phrased as short labels). On the other hand, the fact that the model almost never assigned “rewrites” or “reconstructions”, and mostly used “edits” and “changes”, I tend to interpret as a positive result (in the sense that it somewhat reduces my initial suspicion about heavy LLM rewriting).

However, the results of the semantic analysis are quite discouraging (though not surprising). The channel is clearly oriented toward increasing course enrollment, but in my opinion this is done in a rather aggressive way. Even messages that are formally educational often contain a strong conversion component. The frequency of messages that create a sense of urgency, time pressure, or the need for immediate action forms a rather intrusive communication style.

It is possible that I am the only person who did not stop the bot immediately after the necessary communication ended. As I mentioned earlier, I kept it running deliberately in order to collect data. But during this time, I did genuinely try to keep up with these chats. Now that the experiment is over and the project is completed, I will probably prefer other ways of “staying informed”. I have also concluded for myself that such bots are better turned off immediately after the relevant interaction is over: a continuous stream of messages creates too high a cognitive load relative to the actual amount of valuable information.

