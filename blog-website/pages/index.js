const fs = require('fs');
const path = require('path');

// Import the layout template
const layout = fs.readFileSync(path.join(__dirname, '../templates/layout.template'), 'utf8');

// Import the post-list template
const postList = fs.readFileSync(path.join(__dirname, '../templates/post-list.template'), 'utf8');

// Define the list of blog posts
const posts = [
  {
    title: 'My First Blog Post',
    author: 'Jane Doe',
    date: 'January 01, 2021',
    summary: 'In this post, I discuss the topic of my first blog post.'
  },
  {
    title: 'My Second Blog Post',
    author: 'Jane Doe',
    date: 'January 02, 2021',
    summary: 'In this post, I discuss the topic of my second blog post.'
  }
];

// Define the content for the page
const content = postList.replace('{{#posts}}', posts.map(post => {
  return `
    <li>
      <h2>${post.title}</h2>
      <p>by ${post.author} on ${post.date}</p>
      <p>${post.summary}</p>
    </li>
  `;
}).join(''))
.replace('{{/posts}}', '');

// Render the page
console.log(layout.replace('{{ content }}', content));