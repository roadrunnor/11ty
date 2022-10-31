module.exports = (eleventyConfig) => {
  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");

  eleventyConfig.addPassthroughCopy("src/images");

  /**
   * Okay, now Markdown it has some options that you can use.
   * So Markdown it options, and the way that it works is by using a configurable object
   * and you pass it along some items, some definitions.
   * So we'll say that we want to make HTML, add line breaks, and we'll just set these all
   * to true and linkify which essentially will automatically take like HCP lengths, just
   * like the Wiki and other things did that. It's going to take care of making those links
   * automatically for us.
   */
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  /**
   * Now we're going to have to create a variable called MarkdownLib because this isn't
   * the default library that eleventy uses.
   *
   * So we're going to modify it, where it will say MarkdownIt, MarkdownItOptions, so pass
   * along the settings that we created and then we'll say, use MarkdownIt attributes.
   *
   * So we're specifying a variable and that variable is going to use this object to set
   * the options that we defined over here at the top.
   */
  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

  /**
   * And then we're going to ask it to use this Markdown attributes variable, which is the
   * library that we're adding as a plugin to MarkdownIt.
   *
   * All right, so now we'll go here to eleventy config and we will set the library for
   * processing Markdown to this Markdown lib.
   */
  eleventyConfig.setLibrary("md", markdownLib);

  /**
   * Eleventy config Markdown template engine.
   * We'll set that to NJK. That's going to allow us ti have some template and code in our
   * Markdown files as well.
   *
   * I may need to reset the server, but what this should allow us to do is to put in some
   * special code at the end of our tables. This should allow us to put some code at the end
   * of the tables and pass along a class here. So we're going to say that we want this table.
   *
   * So you're essentially putting two carriage returns after the table and then setting the
   * class of this table element to the table. And so now, because Bootstrap knows how to
   * format tables really nice, this table is looking a lot better and you can use any of the
   * Bootstrap classes.
   */
  eleventyConfig.markdownTemplateEngine = "njk";

  return {
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
