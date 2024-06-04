
export function ColorBox({ color }) {
  const styles = {
    width: "315px",
    height: "30px",
    backgroundColor: color,
    marginTop: "15px",
  };
  return <div style={styles}></div>;
}
