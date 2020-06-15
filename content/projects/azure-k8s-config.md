---
title: "Azure Kubernetes Config Tool"
date: 2020-06-15T19:41:00+03:00
languages: [TypeScript, Azure]
description: "Generate Kubernetes Secrets from Azure App Configuration and Key Vault data."
repository: "https://github.com/jsaari97/azure-k8s-config"
homepage: ""
npm: "https://www.npmjs.com/package/azure-k8s-config"
---

A simple tool that generates Kubernetes Secret configuration files from Azure App Configuration and Key Vault.
Can be used from the command line or programmatically through an easy and pragmatic API.

After been using Azure Cloud for a while, more specifically Azure Kubernetes Service (AKS),
I found it cumbersome to manage the environment variables for all the Node.js services running in the cluster, with multiple development environments each.
Services like App Configuration and Key Vault seemed like the perfect fit, store public keys as App Config key-value pairs, and application secrets as references to Key Vault keys.
The problem was that applications like Node.js usually store application secrets inside `process.env`, and there was no available solution that supported this specific use-case.

That's why I wrote this small utility library that with help of several Azure NPM packages streamline the process.
