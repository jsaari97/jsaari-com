---
title: Musalink
description: Share your favorite track with your friend regardless what streaming service they use.
languages: [TypeScript, React, CircleCI]
repository: https://github.com/jsaari97/musalink
homepage: https://jsaari97.github.io/musalink
---

When sharing music with your friends, it can be very frustrating when everyone is using different music streaming services, and the list just keeps on growing, Spotify, Apple Music, Deezer, Tidal.. you name it!

That's why I built a simple, generic backend API service that given a link, fetches all the song links from the different services, and returns them in a normalized fashion.
Easily extendable in the future to handle all new the new music streaming services that pop up!

Originally I put all the specific parts in their own repositories, but later I merged everything into a monorepo for easier maintainability.