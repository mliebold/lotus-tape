import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function Shows() {
  return (
    <div className="grid gap-20 place-items-center py-32 px-20">
      <h1 className="text-4xl font-extrabold">Upcoming Shows</h1>
      <Table className="">
        <TableBody>
          <TableRow>
            <TableCell>10/12/25</TableCell>
            <TableCell>Brookly Mirage</TableCell>
            <TableCell>Brooklyn, NY</TableCell>
            <TableCell className="text-right">
              <Button>Buy Tickets</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>11/117/25</TableCell>
            <TableCell>Huntington Paramount</TableCell>
            <TableCell>Huntington, NY</TableCell>
            <TableCell className="text-right">
              <Button>Buy Tickets</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>12/10/25</TableCell>
            <TableCell>Webster Hall</TableCell>
            <TableCell>New York, NY</TableCell>
            <TableCell className="text-right">
              <Button>Buy Tickets</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
