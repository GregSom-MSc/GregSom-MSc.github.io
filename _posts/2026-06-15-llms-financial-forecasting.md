---
layout: post
title: "Where Large Language Models Break in Financial Forecasting"
date: 2026-06-15 09:00:00 +0100
topic: AI
excerpt: "LLMs are fluent at explaining markets after the fact. Asking one to forecast them is a different, much harder task."
featured: true
---

There's a tempting shortcut in a lot of fintech demos: point an LLM at a time series, ask it to continue the pattern, and call it a forecast. It usually looks plausible, which is exactly the problem — plausibility and accuracy are different properties, and language models are optimized hard for the first one.

The failure mode I see most often is regression to narrative. Given a plot of a volatile series, the model tends to produce a continuation that "reads well" — smooth, story-shaped — rather than one that respects the actual noise structure of financial data. Markets are closer to a random walk with fat tails than to a coherent story arc, and a model trained on coherent stories will quietly sand off the tails.

Where LLMs do add real value is upstream of the number: parsing unstructured filings, summarizing earnings calls, flagging language shifts in central bank communications. That's classification and extraction, tasks language models are actually built for. The forecast itself is still better left to models built for forecasting.
