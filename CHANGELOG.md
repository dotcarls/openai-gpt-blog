## [Unreleased]

- Create a project structure for a boilerplate javascript blog website
- Add a tags attribute for SEO keywords to our MDX template
- Add a summary attribute that contains a one sentence description of the blog post to the MDX template
- The subject of our blog post is going to be OpenAI ChatGPT. Update the content of post one with an introduction to the technology, and then update the title, tags, and summary attributes accordingly
- Remove the lorem ipsum placeholder text from the blog post
- Expand the blog post content to three paragraphs, making sure to describe how OpenAI ChatGPT works
- Create a templates/ directory in our blog project, then create a template file that can be used to display the attributes from our MDX file
- Create another template in the templates/ directory for the general page layout. The template should have sections for a title bar, a main content area, and a footer bar. The title and footer bars should be fixed to the top of the window, and the content area should be scrollable
- Create a `pages/` subdirectory that will contain the routable pages for our blog. Create an index page in the pages subdirectory that renders a list of blog posts using the layout and post templates
- Update the pages/index.html file to be a javascript file that defines the content attribute for the page layout
- Create another template, `templates/post-list.template`. This template should take an array of blog posts and render the title, date, author, and summary, in a paginated list
- Update the index page to display the list of blog posts using the post-list template
- Create a dist subdirectory to contain the fully rendered HTML output files for the blog. Render the blog website to the dist directory
- Show me only the content of the dist/index.html file. Do not explain it
- Update the blog using content from `blog/blog-post-*.mdx`
- Using the updated index.js file, show me the compiled output of dist/index.html. Do not explain. Show only the code
- Update the first blog post in the `blog` directory such that the content is a three sentence summary of OpenAI ChatGPT, then update the title and summary attributes accordingly, and add relevant SEO keywords to the tags attribute
- Update the second blog post in the `blog` directory such that the content is a three sentence summary of internet blogging, then update the title and summary attributes accordingly, and add relevant SEO keywords to the tags attribute
- Update the third blog post in the `blog` directory such that the content is a three sentence summary of ethical debates related to artificial intelligence, then update the title and summary attributes accordingly, and add relevant SEO keywords to the tags attribute
- For each blog post in the blogs subdirectory, update the author attribute with distinct names selected from a list of well-known AI researchers
- For each blog post in the blogs subdirectory, update the date attribute with distinct dates corresponding to the publishing date of notable research papers on the topic of artificial intelligence
- Update the dist folder with the rendered index page, as well as pages for each blog post
- Show me the contents of the files in dist after being generated by a static site generator
- Show me the contents of dist/index.html. Do not explain. Show only the code
- Show me the full contents of dist/blog-post-1.html. Do not explain. Show only