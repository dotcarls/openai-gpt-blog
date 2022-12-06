const fs = require('fs');
const path = require('path');

// Import the layout template
const layout = fs.readFileSync(path.join(__dirname, '../templates/layout.template'), 'utf8');

// Import the post-list template
const postList = fs.readFileSync(path.join(__dirname, '../templates/post-list.template'), 'utf8');

// Read the MDX files from the blog directory
const mdxFiles = fs.readdirSync(path.join(__dirname, '../blog')).filter(file => file.endsWith('.mdx'));

// Generate the list of blog posts from the content of the MDX files
const posts = mdxFiles.map(file => {
  // Read the contents of the MDX file
  const mdx = fs.readFileSync(path.join(__dirname, '../blog', file), 'utf8');

  // Parse the frontmatter from the MDX file
  const frontmatter = mdx.match(/^---\n([\s\S]*?)\n---\n/);

  // Parse the attributes from the frontmatter
  const attributes = frontmatter[1].split('\n').reduce((attrs, line) => {
    const [key, value