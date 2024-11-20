<div>
	{умова && розмітка} 
</div>

// буде відрендерена якщо умова зліва наближається до true


const Mailbox = ({ username, messages }) => {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 && (
        <p>You have {messages.length} unread messages</p>
      )}
    </>
  );
};
