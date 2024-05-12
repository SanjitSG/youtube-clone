import React from "react";

const commentsData = [
  {
    name: "Sanjit Gawade",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, unde.",
    replies: [],
  },
  {
    name: "Nillay Naik",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit?",
    replies: [
      {
        name: "Ferrari Gawade",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit?",
        replies: [],
      },
      {
        name: "Puma Gawade",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit?",
        replies: [
          {
            name: "Ferrari Gawade",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit?",
            replies: [],
          },
          {
            name: "Puma Gawade",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit?",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shriya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit?",
    replies: [],
  },
  {
    name: "Ferrari Gawade",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit?",
    replies: [],
  },
  {
    name: "Puma Gawade",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, suscipit?",
    replies: [],
  },
];

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-2 items-center gap-4">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user"
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="border-l-2 border-black ml-4">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
