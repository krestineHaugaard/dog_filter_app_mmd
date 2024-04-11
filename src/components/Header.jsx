import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" prefetch={false}>
            Frontpage
          </Link>
        </li>
        <li>
          <Link href="/henry" prefetch={false}>
            Henry
          </Link>
        </li>
      </ul>
    </nav>
  );
}
