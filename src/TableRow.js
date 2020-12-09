export default function TableRow({songTitle, artistName, songUrl}) {
  return (
    <tr style={{ height: '36px', textAlign: 'center', paddingBottom: '16px', border: 'solid 1px #333'}}>
      <td>{songTitle}</td>
      <td>{artistName}</td>
      <td><a href={songUrl}>{songUrl}</a></td>
    </tr>
  );
}