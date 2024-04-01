import { theme } from "../../styles";

export default function Page404(props) {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <p
          style={{
            fontSize: "60px",
            width: "130px",
            fontWeight: "bold",
            borderRight: `2px solid ${theme.col_2}`,
            color: theme.col_2,
          }}
        >
          404
        </p>
        <p color={theme.col_3}>PAGE NOT FOUND</p>
      </div>
    </>
  );
}
