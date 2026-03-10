---
title: "Gateway Overview"
articleID: 2229
category: "MJS React FE > Working with Findify's DevTool"
knowledgeBase: "Merchandising Cloud"
---

# Gateway Overview

The Gateway development tool streamlines the process of customizing your search and merchandising components, which helps you deploy improvements faster and maintain better quality control. When development teams can work efficiently with version control and real-time previews, you can iterate on merchandising features more quickly to optimize product discovery and conversion performance.

Efficient development workflows enable you to test and deploy search customizations with greater confidence and speed. This helps you respond more quickly to merchandising opportunities, implement conversion optimizations, and ensure that your search and discovery features consistently deliver the shopping experiences your customers expect.

> The Gateway revolutionizes the development process for web agencies working on ecommerce stores. This powerful tool provides a streamlined workflow, allowing developers to work efficiently with our search, merchandising, and recommendations components.

In this article, we will explore what the Gateway is, its main benefits, who can use it, and how to start using it.

## What is the Gateway?

The Gateway is a local preview function that enables developers to seamlessly work with our Merchant JavaScript Library (MJS) components. It acts as a bridge between the developer's local files and the local version of the website, providing a real-time preview of the changes being made.

With the Gateway, developers can efficiently customize and tailor our components to meet the specific needs of their clients' ecommerce stores.

![440aff4-image_4.png](https://files.readme.io/440aff4-image_4.png)

## Gateway benefits include efficient development, version control, and multi-developer collaboration

- **Efficient Development:** The Gateway enhances the development process by allowing developers to work with our components directly from their favorite Integrated Development Environment (IDE). This eliminates the need to use a browser-based console, providing a more familiar and efficient coding environment.
- **Version Control:** With the Gateway, developers can leverage the power of Git and GitHub for version control. Changes made to the components can be easily managed through branches, pull requests, and commits, enabling better collaboration and the ability to roll back to previous versions if needed.
- **Multi-Developer Collaboration:** The Gateway enables two developers to work on the same project simultaneously. Through branch-based development and pull requests, these two team members can collaborate seamlessly, making it easier to distribute tasks and speed up the development process.

![a8aa4e5-image_5.png](https://files.readme.io/a8aa4e5-image_5.png)

## Who can use the Gateway?

The Gateway is designed for web agencies working on ecommerce stores. It empowers developers and agencies who are utilizing our components to deliver exceptional search, merchandising, and recommendation solutions to their clients.

> Whether you are a seasoned React developer or new to the framework, the Gateway provides a flexible workflow that caters to diverse skill sets.

## How to start using the Gateway

To start using the Gateway, first get in contact with us via[support@maropost.com](mailto:support@maropost.com)

Then, the following steps will take place:

1. **Repository Creation:** We will create a new repository within the organization that corresponds to the merchant's name folder. This repository will serve as the workspace for our components.
2. **Repository Configuration:** In the repository settings, we will add up to two collaborators who will be working on the project and grant them write access to the repository. We will additionally set up a webhook that connects to the compilation server, enabling automatic updates when new commits are pushed to the main branch.
3. **Installation:** On your end, you will first need to install the **Gateway extension**. Here is how to download it:  1. Download the extension [zip file](https://assets.findify.io/findify-gateway.zip) and unzip it.
  2. Go to `Chrome Browser -> Options (3 dots in the top right corner) -> Extensions -> Manage Extensions` OR click use this shortcut: [chrome://extensions/](https://developers.findify.io/docs/findify-gateway)
  3. Enable `Developer Mode` in the top corner.
  4. Click on `Load unpacked`and select the `build` folder extracted from the zip file
  5. You have the Extension installed!
4. **Workflow:** Open your preferred IDE, navigate to the merchant's websocket folder within the cloned repository and run the command: node server, and start the Gateway server by running the appropriate commands. Connect to the store using the Gateway extension in your browser, establishing a live connection between your local files and the store's components.
5. **Development:** Make changes to the components using your IDE, preview the results in real-time through the Gateway, and iterate until you are satisfied with the modifications.
6. **Version Control and Deployment:** Use Git commands to add your changes, commit them, and push them to the repository. Utilize branches, pull requests, and merges to manage the codebase and deploy the changes to the live components when ready.

![0390988-image_3.png](https://files.readme.io/0390988-image_3.png)

## Initialization

Simply clone the repository that the team have invited you to. The access will be shared by our Team

Bash

```plaintext
git clone <repository-url>
```

## Folder structure and notions

- `customComponents`

Customized default components, it will contain overwritten default components if you choose to customize it.
- `defaultComponents`

Default MJS components.
- `websocket`

Contains core logic and core files, no changes here are expected. Here we handle the connection and the transpilation of your changes.
- `defaultStyles.css`

Same as `defaultComponents`, there is `defaultStyles` that contains the default MJS styling. You do not need to write any styles in here, rather it will contain the default styles for the reference.
- `styles.css`

Here you will add new or overwrite existing styles. Note: only Findify related styles should be included to this file.

## Workflow

1. To run the server locally, you need to follow the below commands:

Bash

```plaintext
cd <merchantNameFolder>cd <merchant-id>cd websocketnode server
```

> **Warning:** Before modifying anything, it is a good practice to always turn ON the node server as illustrated above.

2. Proceed to your browser and open your Site. Open the Gateway extension and click OPEN.

In the terminal of your IDE you will see the log that a connection has been established and that the store is injecting the components. You are ready to customize your store!

## How to customize and review components

1. Whenever you update any component or styles, with every save you will see the changes immediately appear locally on your storefront. This will allow you to preview the work.
2. In order to create custom components (not modify existing ones), you need to create a new `.tsx` file within the ROOT FOLDER:

Root Folder

```plaintext
cd <merchantNameFolder>/<merchant-id>/customComponents
```

Once it is created, you can import the file to any other component in customizations, like this:

Import Sample

```plaintext
import CustomComponent from 'CustomComponent';
```

> Note:You do not need to provide the path to the custom component as might be assisted by your IDE, just write the custom component filename.

At the moment, you cannot use any third-party or opensource custom modules in customizations. There are a few that are pre-installed and ready to use, such as: `axios`, `SwiperJS`.

## How to deploy the customizations

Once you are happy with your changes, push the new branch to the repository:

Deploy the changes

```plaintext
// This is git. Best guideline are common-sense. eg. use branches and PRsgit add <your-changes>git push// Orgit push -u origin <your-branch>// Then merge the PR to main to deploy the changes
```

Below are the files/folders that you need to commit:

- `customComponents` folder
- `style.css` file
- *websocket/transpiled*`components.json` and `style.json` files

`defaultComponents` folder and `defaultStyle.css` file should not be committed.

> ️IMPORTANT:It is very important that you add websocket/transpiled files with every commit. These are the core files that contain components and styles transpiled and ready to be used by MJS.

> **Note:** The repository requires at least one reviewer to review the Pull Request. If you have only one developer in place, please contact our support support@maropost .com

## Frontend Components

Here, you will find further documentation and samples on how to customize components:

1. [Autocomplete](https://developers.findify.io/docs/customization_autocomplete)
2. [Product Grid](https://developers.findify.io/docs/product-grid)
3. [Product Card](https://developers.findify.io/docs/product-card)
4. [Filters](https://developers.findify.io/docs/filters)
5. [Sorting](https://developers.findify.io/docs/sorting-refinements)
6. [Recommendations](https://developers.findify.io/docs/recommendaion-widgets)