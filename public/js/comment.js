const commentHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const body = document.querySelector('#comment').value.trim();
  const blog_id = document.querySelector('textarea').dataset.id;

  if (comment) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ body, blog_id: blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#commentBtn')
.addEventListener('click', commentHandler);
