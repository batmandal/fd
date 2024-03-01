import Link from "@mui/material/Link";

type LinksProps = {
  label: string;
  onClick: any;
};

export default function ButtonLink(props: LinksProps) {
  const { label, onClick } = props;
  return (
    <Link
      style={{ whiteSpace: "nowrap", color: "white", cursor: "pointer" }}
      underline="always"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
