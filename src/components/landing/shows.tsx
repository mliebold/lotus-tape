import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import Link from "next/link";
import { format } from "date-fns";

const payload = await getPayload({ config: configPromise });

export default async function Shows() {
  const shows = await payload.find({
    collection: "shows",
    sort: "date",
    where: {
      date: {
        greater_than_equal: new Date(),
      },
    },
  });

  return (
    <div className="grid gap-20 place-items-center py-32 px-20">
      <h1 className="text-4xl font-extrabold">Upcoming Shows</h1>
      {shows.totalDocs > 0 ? (
        <Table>
          <TableBody>
            {shows.docs.map((show) => (
              <TableRow key={show.id}>
                <TableCell>{format(show.date!, "M/dd/yyyy")}</TableCell>
                <TableCell>{show.venue}</TableCell>
                <TableCell>{show.location}</TableCell>
                <TableCell>
                  {show.ticketLink ? (
                    <Button asChild>
                      <Link
                        href={show.ticketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tickets
                      </Link>
                    </Button>
                  ) : (
                    <p>No ticket link</p>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <h4 className="text-lg text-muted-foreground">No upcoming shows</h4>
      )}
    </div>
  );
}
