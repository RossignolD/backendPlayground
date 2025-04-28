const blogPosts = [
  {
    id: 1,
    title: "How to Get Started with JavaScript",
    author: "Alice B.",
    publicationDate: "01/15/2023",
    contents:
      "JavaScript is a versatile programming language that is widely used for web development. In this blog post, we will explore the basics of JavaScript and how to get started with it. We will cover topics such as variables, data types, functions, and control flow. By the end of this post, you will have a solid understanding of JavaScript and be ready to start building your own web applications.",
    readTime: Math.ceil(contents.length / 200),
    likes: 0,
    comments: [
      {
        id: 1,
        author: "Bob C.",
        content: "Great post! I learned a lot about JavaScript.",
      },
      {
        id: 2,
        author: "Charlie D.",
        content: "I love JavaScript! It's my favorite programming language.",
      },
      {
        id: 3,
        author: "Diana E.",
        content: "Thanks for the tips! I will definitely try them out.",
      },
    ],
  },

  {
    id: 2,
    title: "Understanding Asynchronous JavaScript",
    author: "Eve F.",
    publicationDate: "02/27/2023",
    contents:
      "Asynchronous JavaScript is a powerful feature that allows you to perform non-blocking operations in your code. In this blog post, we will explore the concept of asynchronous programming and how it works in JavaScript. We will cover topics such as callbacks, promises, and async/await. By the end of this post, you will have a solid understanding of asynchronous JavaScript and be able to use it in your own projects.",
    readTime: Math.ceil(contents.length / 200),
    likes: 0,
    comments: [
      {
        id: 1,
        author: "Alice B.",
        content: "This is a great introduction to asynchronous JavaScript!",
      },
      {
        id: 2,
        author: "Bob C.",
        content:
          "I had a hard time understanding promises, but this post made it clear.",
      },
    ],
  },
];

const viewAllPosts = () => {
  return blogPosts;
};

const viewBlogPostById = (id) => {
  return blogPosts.find((post) => post.id == id);
};

const addBlogPost = (title, author, contents) => {
  const newBlogPost = {
    id: blogPosts.length + 1,
    title: title,
    author: author,
    publicationDate: new Date(),
    contents: contents,
    readTime: Math.ceil(contents.length / 200),
    likes: 0,
    comments: [],
  };

  blogPosts.push(newBlogPost);

  return newBlogPost;
};

const updateBlogPostById = (id, update) => {
  const postIndex = blogPosts.findIndex((post) => post.id == id);
  if (postIndex < 0) throw new Error("no blog post found with that id");
  const updatedPost = {};
};
