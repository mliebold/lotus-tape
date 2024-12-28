interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Email sent from lotustape.com</h1>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <p>{message}</p>
    </div>
  );
}
