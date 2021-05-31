---
title: This Year on LinkedIn (So Far)
lang: en-US
description: Being in the tech industry and having your LinkedIn mailbox fill up seem to go hand in hand. Over the years I've grown more accustomed to it but felt like the pace had been increasing, so I decided to take a deep dive into the data. 
date: "2021-05-26"
---
# This Year on LinkedIn (So Far)
**5/27/2021**

Being in the tech industry and having your LinkedIn mailbox fill up seem to go hand in hand. Over the years I've grown more accustomed to it but felt like the pace had been increasing, so I decided to take a deep dive into the data. I analyzed a few different aspects of the messages I received, including compensation, name of the company, and if the job was Remote.  The results were quite interesting and confirmed my feelings that everything was definitely heating up. :fire:

::: tip
Standard disclosures: I'm just an anecdote that may not be industry-wide. I manually reviewed all of the messages in my inbox. Your results may vary. A lot of this is skewed by keywords, and titles. Senior Security engineers are pretty hard to come by so that definitely tilts the demand. 
:::

## All the messages
I tried to look into LinkedIn's API to dump all of the messages, however authentication turned out to be quite a mess so I decided to just spend the time manually reviewing each message.  In total I've **113** recruiter messages so far this year. I had to filter out a number of marketing posts, various unrelated messages and of course friends sending the oft robotic sounding messages LinkedIn suggests. 

## Security vs Software Engineer Over Time
The job market is red hot right now - Everyone I know is hiring, everyone I know can't find people. Out of all of the angles I analyzed, this one was definitely just an indicator of the quality of the keywords in my profile. Theoretically, since I'm a Security engineer I should get more security offers, but even having had the same title for the entire year it seems like the security offers are ramping up over time.

![Security vs. SWE](/assets/images/blog/year-in-linkedin/security-vs-swe-time.png)



## Who's knocking?
One of my pet peeves about LinkedIn messages is that they frequently don't tell you who it is the job is for. I plotted the number of known vs unknown companies against time and it was pretty clear that recruiters preferred not to share the name of the organization, however something shifted in the past month where the name was shared more often.

![Who's Knocking vs. Time](/assets/images/blog/year-in-linkedin/whos-knocking.png)



## Remote OK
Another angle I was curious about was if there's been an increase in remote-friendly offerings. I generated a chart looking at how many messages there were offering remote over time.  From the chart it looks like this has remained relatively stable, and, though the number of offerings has increased over time, the ratio appears to be similar.  

![Remote vs. Time](/assets/images/blog/year-in-linkedin/remote-vs-time.png)

::: tip
Quick note on the data: I looked in the message for mentions of remote however if it wasn't mentioned I didn't actively seek to determine if it was remote. 
:::

## Compensation
Unsurprisingly, most folks _didn't_ offer compensation numbers right off the bat.  **105** of the 113 messages didn't include any salary details whatsoever. That left a total of 8 messages to analyze along this vertical.  As I filtered I chose the highest if a range was provided.

From this very limited sample size, it appeared that security jobs were paying a good bit more. We need to be careful not to overly generalize - We'll always find outliers and `n = 8` here. It's also worth noting that this is simply Salary - Most of the messages mentioned "incredible benefits" and potentially stock options, but no specific numbers were mentioned. 

| Field             | # of Messages | Top Salary | Median Salary | Lowest Salary |
|-------------------|---------------|------------|---------------|---------------|
| Security          | 4             | $220,000   | $185,000      | $170,000      |
| Software Engineer | 4             | $320,000   | $150,000      | $110,000      |
