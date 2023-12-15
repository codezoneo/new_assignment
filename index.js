// Sample data
let user = {
    id: 1,
    lastActivityTime: null,
    posts: [
      { id: 1, content: 'Post 1' },
      { id: 2, content: 'Post 2' },
      { id: 3, content: 'Post 3' }
    ]
  };
  
  // Simulated function to create a post
  function createPost(content) {
    return new Promise((resolve) => {
      // Simulate asynchronous operation (e.g., API call)
      setTimeout(() => {
        const post = { id: user.posts.length + 1, content };
        user.posts.push(post);
        resolve(post);
      }, 1000); // Simulating a 1-second delay
    });
  }
  
  // Simulated function to update the user's last activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      // Simulate asynchronous operation (e.g., API call)
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve(user.lastActivityTime);
      }, 1000); // Simulating a 1-second delay
    });
  }
  
  // Simulated function to delete a post
  function deletePost(postId) {
    return new Promise((resolve, reject) => {
      // Simulate asynchronous operation (e.g., API call)
      setTimeout(() => {
        const index = user.posts.findIndex(post => post.id === postId);
        if (index !== -1) {
          const deletedPost = user.posts.splice(index, 1)[0];
          resolve(deletedPost);
        } else {
          reject(new Error('Post not found'));
        }
      }, 1000); // Simulating a 1-second delay
    });
  }
  
  // Function to perform the described sequence of operations
  function performOperations() {
    createPost('New Post')
      .then((newPost) => {
        console.log('Post Created:', newPost);
  
        // Update user's last activity time
        return updateLastUserActivityTime();
      })
      .then((updatedLastActivityTime) => {
        console.log('Last Activity Time Updated:', updatedLastActivityTime);
  
        // Log all posts and last activity time
        console.log('All Posts:', user.posts);
        console.log('Last Activity Time:', updatedLastActivityTime);
  
        // Delete the last post
        return deletePost(user.posts[user.posts.length - 1].id);
      })
      .then((deletedPost) => {
        console.log('Post Deleted:', deletedPost);
  
        // Log remaining posts
        console.log('Remaining Posts:', user.posts);
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  }
  
  // Call the function to start the sequence of operations
  performOperations();
  