---
layout: default
title: Contact
---
## Contact me

<style>
    .contact-form {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        background-color: #f9f9f9;
    }
    .contact-form form {
        display: flex;
        flex-direction: column;
    }
    .contact-form label {
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .contact-form input[type="text"],
    .contact-form input[type="email"],
    .contact-form textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .contact-form input[type="submit"] {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 4px;
        background-color: #134074;
        color: white;
        cursor: pointer;
        margin-top: 10px;
        align-self: center;
    }
    .contact-form input[type="submit"]:hover {
        background-color: #BBC5AA;
        color: #134074;
    }
</style>

<div class="contact-form">
    <form>
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name"> <br>

        <label for="email">Your Email address</label>
        <input type="email" id="email" name="email"><br>
        
        <label for="message">Message</label>
        <textarea id="message" name="message">How can I help you?</textarea><br>
        <br>
        <input type="submit" value="Send" style="font-weight: bold;">
    </form>
</div>
