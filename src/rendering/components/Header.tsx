interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header>
      <h2>{title}</h2>
      <hr />
    </header>
  );
}
