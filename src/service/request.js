const url = "/api/topics";

//Käsitellään topiceja

export const getAllTopics = () => {
  return fetch(url).then(res => res.json()); 
};

export const getSingleTopic = id => {
  return fetch(`${url}/${id}`).then(res => res.json());
};

export const postTopic = topic => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(topic)
  });
};

export const deleteTopic = id => {
  return fetch(`${url}/${id}`, {
    method: "DELETE"
  });
};

export const editTopic = id => {
  return fetch(`${url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" }
  });
};


//Käsitellään kommentteja

export const getAllComments = id => {
  return fetch(`${url}/${id}/comments`)
  .then(res => res.json()); 
};

export const getSingleComment = id => {
  return fetch(`${url}/${id}/comments/${id}`).then(res => res.json());
};

export const postComment = (id, comment) => {
  return fetch(`${url}/${id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment)
  });
};
export const deleteComment = id => {
  return fetch(`${url}/${id}/comments/${id}`, {
    method: "DELETE"
  });
};