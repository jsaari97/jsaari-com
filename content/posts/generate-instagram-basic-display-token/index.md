---
title: Generate an Instagram Basic Display API Token
image: frontend.png
date: 2020-06-16T16:00:00+03:00
draft: false
---

I was recently tasked with implementing an Instagram feed that shows the latest Instagram posts on a website. Due to recent changes to the Instagram API it was a bit challenging to find any good up-to-date information on how to implement this.

Instagram [announced](https://developers.facebook.com/blog/post/2019/10/15/launch-instagram-basic-display-api/) end of last year that
they'll be deprecating their Legacy API Platform on March 2, 2020 (later postponed to June 29, 2020 due to COVID-19).
The new API, known as Basic Display API, offers more fine-grained privacy settings and deprecations of some fields such as location data and follower count. The problem is that this complicates and break existing solutions that rely on the legacy API.

This guide walks you through the steps of setting up the required Facebook Developer App, inviting your Instagram user as a beta-tester and generating a Basic Display API token.

First off, in order for this to work you need a Facebook and a public Instagram account. The Facebook account is used to manage the API applications and the Instagram account is where you'll get your images for the feed from.

## Setting up the Instagram API

Before you can generate yourself a Basic Display API token you must register a Facebook "App".

1. Go to [Facebook for developers](https://developers.facebook.com/).
2. Go to **My Apps > Create App**
3. Enter the **Display Name** for your application and press **Create App ID**
4. Under "Add a Product", find Instagram and press **Set Up**
5. In the sidebar menu, go to **Settings > Basic** and scroll to down to **+ Add Platform**.
6. Select **Website** and enter your website's URL and press **Save Changes**.
7. In the sidebar menu, under **PRODUCTS**, go to **Instagram > Basic Display**.
8. Press **Create New App**, and in the popup press **Create App**.

Because we won't be letting users register and use our API publicly, we wont't need to submit our App for review.

## Generate an Instagram API Token

Now that we have our App set up we can go ahead and generate ourselves a API token.

1. In the sidebar menu, go to **Instagram > Basic Display**.
2. Under **User Token Generator**, press **Add or Remove Instagram Testers**.
3. Under **Instagram Testers**, press **Add Instagram Testers**.
4. Enter the Instagram username of the account you want to fetch the images from and press **Submit**
5. In a new tab, go to [Instagram Apps and Websites](https://www.instagram.com/accounts/manage_access/) and under **TESTER INVITES**, accept the Application invitation by pressing **Accept**.
6. Go back to the Facebook Developers site and in the sidebar menu, go to **Instagram > Basic Display**.
7. Under **User Token Generator**, you should now see your Instagram tester account.
8. Press **Generate Token** and login to Instagram.
9. You're prompted to authorize app permissions, press **Authorize**.
10. Check the box **I Understand** and **copy the API token**.

You now have your very own Instagram API token! Make sure to keep your token safe and **never** expose it client-side!

## Usage

Now when you've recieved your API token you can use it to query the Basic Display API for data. Below are some examples using the `curl` command.

For more options and more detailed documentation, see the official [Basic Display API reference](https://developers.facebook.com/docs/instagram-basic-display-api/reference/media).

### Fetching list of posts

The following command fetches your latest Instagram posts:

```bash
curl "https://graph.instagram.com/me/media?fields=media_type,media_url,timestamp&access_token=MY_API_TOKEN"
```

### Fetch specific post

To fetch the data about a specific post use the following:

```bash
curl "https://graph.instagram.com/POST_ID?fields=media_type,media_url,timestamp&access_token=MY_API_TOKEN"
```

### Refreshing API access token

When generating API tokens through the Facebook Developers web UI as described in this guide, you're given an long-lived access token.
Long-lived access tokens are valid for 60 days and can be refreshed, after which the token will be valid for 60 days again. However if the token expires, you have to generate a new token following the guide above.

To refresh your token using cURL, use the following command to make your token valid for another 60 days:

```bash
curl "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=MY_API_TOKEN"
```

### Rate limiting

Because your Instagram App probably will only have one user registered, you may only make a maximum of 240 API calls per hour, as the number of API calls your app can make each hour is 240 times the number of users, which in our case is one.

This means if your website is getting a lot of traffic you'll quickly hit the rate limit, and your API calls will be rejected until the hour is reset. That's why it's recommended to cache your API results to avoid running into this issue!

## Summary

The new Basic Display API is very simple and easy to use, and is a great option for creating personal Instagram post feeds for your websites and projects. Because the API only provides read-only access to the your Instagram data you don't need to worry about your account being hijacked even if your API token unintentionally get into the wrong hands.
