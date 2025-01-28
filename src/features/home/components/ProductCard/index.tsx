import { Product } from "../../types";

export const ProductCard = ({ price, title, image }: Product) => {
  return (
    <div
      style={{
        marginBottom: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ddd",
        padding: 15,
        borderRadius: 10,
        width: 200,
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: 150,
          height: 150,
          objectFit: "cover",
          borderRadius: 10,
        }}
      />
      <p style={{ fontWeight: "bold", margin: "10px 0" }}>$ {price}</p>
      <p style={{ textAlign: "center" }}>{title}</p>
    </div>
  );
};
