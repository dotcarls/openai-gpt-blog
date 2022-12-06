const fs = require('fs');
const path = require('path');

// Import the layout template
const layout = fs.readFileSync(path.join(__dirname, '../templates/layout.template'), 'utf8');

// Import the post template
const post = fs.readFileSync(path.join(__dirname, '../templates/post.template'), 'utf8');

// Define the content for the page
const content = `
  <h1>My Blog</h1>

  ${post.replace('{{ title }}', 'My First Blog Post')
           .replace('{{ author }}', 'Jane Doe')
           .replace('{{ date }}', 'January 01, 2021')
           .replace('{{ tags }}', 'SEO, keywords, blogging')
           .replace('{{ summary }}',