export default function TableRow(songTitle, artistName, songUrl) {
  return (
    <tr>
      <td>{songTitle}</td>
      <td>{artistName}</td>
      <td><a href={songUrl}>{songUrl}</a></td>
    </tr>
  );
}