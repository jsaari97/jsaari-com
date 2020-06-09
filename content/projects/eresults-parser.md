---
title: EResults parser
description: Parse orienteering results and splits from non-semantic HTML into easy-to-consume JSON data and deploy to Google Cloud as a serverless Cloud Function.
languages: [TypeScript, CircleCI]
repository: https://github.com/jsaari97/eresults-parser
---

I was tasked to take orienteering results outputted in HTML, and make it mobile-friendly and responsive.
This proved to be a somewhat tricky problem to solve.

First I thought that this could easily be done using one of the many excellent scraping libraries that are available. But after inspecting
the HTML documents I noticed that they aren't structured in a traditional `table` layout, but rather dumped inside a `pre` tag. Formatted
using only whitespace with the occasional span to add color to position changes.

This project saw the use of many complicated regular expression (regex) patterns, as there were many edge-cases to take into account
when parsing the documents. Because it can easily lead to regression, fixing one issue, and two more break. This can be avoided by rigorously
writing unit tests to make sure nothing breaks while you add complexity and new cases emerge.