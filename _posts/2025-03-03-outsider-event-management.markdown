---
layout: posts
title:  "Outsider: An Intelligent Event Management Portal"
date:   2025-03-02 16:13:27 -0500
# tags: [portfolio, projects, event-management]
author_profile: true
author: Navneetha Rajan
categories: work
highlight_home: true
tagline: "Showcase your projects effectively using the BARN method"
header:
  overlay_image: https://images.unsplash.com/photo-1444858291040-58f756a3bdd6
  teaser: https://images.unsplash.com/photo-1444858291040-58f756a3bdd6
  caption: "Photo credit: [**Unsplash: Frances Gunn**](https://unsplash.com/@francesgunn)"
description: This post showcases the Outsider project using the B.A.R.N. framework to detail its background, approach, results, and next steps.
---

# Introduction
Outsider is an innovative, user-friendly event management website that redefines the way organisers and users connect around events. This project features two distinct portals—one for organisers and another for students/users—and integrates intelligent functionality to enhance user engagement. In this article, we use the B.A.R.N. framework—Background, Approach, Results, and Next Steps—to detail the project’s journey and showcase its standout features.

## Background:
Outsider was conceived to address the limitations of conventional event management platforms. Its dual-portal system empowers organisers to create events, allocate funds, and track profits, while users can register for events, view their registrations, and connect with like-minded individuals through a unique similar-user feature. By bridging the gap between event organisers and attendees, Outsider creates a community-centric environment that leverages data-driven insights and collaborative networking.

**Key Points:**
- **Engaging User Experience:** Offers distinct, account-based portals tailored for organisers and students/users.
- **Problem Statement:** Traditional event management sites often lack features that encourage user connectivity and insightful data visualization—challenges that Outsider directly addresses.
- **Unique Value:** Provides a list of similar users on every profile, enabling networking opportunities rarely seen in other platforms.

## Approach:
The development of Outsider involved a modern web technology stack and an intelligent design strategy:

**1. Methodology:**
- **Frontend:** Built with Angular (HTML, CSS, TypeScript) to deliver a responsive, dynamic interface.
- **Backend:** Developed using Flask (Python) and organized as a series of microservices. Each functionality is encapsulated within its own RESTful API.
- **Database:** Utilized SQLite for simplicity and ease of use during development.

**2. Intelligent Functionality & Data Analytics:**
- **Collaborative Filtering:** Implemented cosine similarity algorithms to recommend similar users based on event registration patterns, promoting user connectivity.
- **Data Visualization:** 
  - **Organiser Portal:** Features graphs that display registrations per event and profit metrics.
  - **User Portal:** Showcases pie charts detailing popular events and preferred event categories.
- **Performance Testing:** The application’s robustness was validated using Locust, ensuring a stable experience under heavy usage.

**3. Enhanced User Experience:**
- **AJAX & Auto-Complete:** Integrated AJAX submission throttling and an auto-complete search mechanism to improve efficiency and interactivity.

## Results:
Outsider has proven to be a comprehensive solution that stands apart in the event management space. Its key outcomes include:

**1. Streamlined Event Management:**  
- Organisers can effortlessly create events, manage finances, and track profits—all from an intuitive dashboard.

**2. Enhanced User Connectivity:**  
- The unique feature of listing similar users fosters networking, enabling users to form teams and connect with peers who share similar interests.

**3. Data-Driven Insights:**  
- Both portals benefit from interactive data visualizations, providing actionable insights and guiding decision-making for organisers and attendees alike.

**4. Reliable Performance:**  
- Performance tests with Locust confirm that the application can handle significant traffic, ensuring a smooth experience for all users.

## Next Steps:
Looking ahead, there are several avenues to further enhance the Outsider platform:

**1. Scalability Enhancements:**  
- Consider migrating from SQLite to more robust databases such as PostgreSQL or MySQL to support a larger user base and higher data volumes.

**2. Advanced Personalisation:**  
- Integrate more sophisticated machine learning models to refine user recommendations and offer predictive insights.

**3. Feature Expansion:**  
- Add new functionalities like push notifications, calendar integrations, and social media sharing to boost user engagement.

**4. Security Upgrades:**  
- Continuously improve security measures to protect user data and maintain privacy across both portals.

**5. User Feedback Integration:**  
- Implement systematic feedback collection to refine the user interface and further tailor the platform to user needs.

## Conclusion
The Outsider project demonstrates how a thoughtful combination of modern web technologies, intelligent data analytics, and a user-centric approach can transform traditional event management. By following the B.A.R.N. framework, this showcase not only highlights the project’s innovative features but also outlines a clear path for future enhancements. Outsider stands as a testament to how strategic planning and continuous improvement can create impactful solutions in the digital age.