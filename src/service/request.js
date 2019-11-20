const url = "/api/topics";

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
