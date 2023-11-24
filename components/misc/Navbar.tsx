export default function Navbar() {
  return (
    <nav className="p-4">
      <ul className="flex justify-between">
        <span className="font-semibold text-xl">Quarrel</span>
        <button type="button">Sign-in Google</button>
      </ul>
    </nav>
  );
}
