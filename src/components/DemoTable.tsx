import { useState, useMemo } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table"
import type { ColumnDef, SortingState } from "@tanstack/react-table"
import { ArrowUpDown, ChevronLeft, ChevronRight, Search, Check, AlertCircle, Clock } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface Transaction {
  id: string
  date: string
  customer: string
  product: string
  amount: number
  status: "Completed" | "Pending" | "Failed"
}

const mockTransactions: Transaction[] = [
  { id: "TX-1001", date: "2026-06-20", customer: "Sophia Martinez", product: "Standard Plan", amount: 49.00, status: "Completed" },
  { id: "TX-1002", date: "2026-06-21", customer: "Jackson Davis", product: "Pro Plan", amount: 99.00, status: "Pending" },
  { id: "TX-1003", date: "2026-06-22", customer: "Emma Thompson", product: "Enterprise License", amount: 899.00, status: "Completed" },
  { id: "TX-1004", date: "2026-06-23", customer: "Liam Wilson", product: "Standard Plan", amount: 49.00, status: "Failed" },
  { id: "TX-1005", date: "2026-06-23", customer: "Olivia Garcia", product: "Pro Plan", amount: 99.00, status: "Completed" },
  { id: "TX-1006", date: "2026-06-24", customer: "Noah Robinson", product: "Pro Plan", amount: 99.00, status: "Pending" },
  { id: "TX-1007", date: "2026-06-24", customer: "Ava Rodriguez", product: "Standard Plan", amount: 49.00, status: "Completed" },
  { id: "TX-1008", date: "2026-06-25", customer: "Lucas Miller", product: "Enterprise License", amount: 899.00, status: "Completed" },
]

export function DemoTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState("")

  const columns = useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        accessorKey: "id",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="p-0 hover:bg-transparent hover:text-foreground font-semibold text-xs gap-1"
          >
            TX ID
            <ArrowUpDown className="h-3 w-3" />
          </Button>
        ),
        cell: (info) => <span className="font-mono font-medium text-foreground">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "date",
        header: "Date",
        cell: (info) => <span className="text-muted-foreground">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "customer",
        header: "Customer",
        cell: (info) => <span className="font-semibold text-foreground">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "product",
        header: "Product",
        cell: (info) => <span className="text-foreground">{info.getValue() as string}</span>,
      },
      {
        accessorKey: "amount",
        header: ({ column }) => (
          <div className="text-right">
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="p-0 hover:bg-transparent hover:text-foreground font-semibold text-xs gap-1 ml-auto"
            >
              Amount
              <ArrowUpDown className="h-3 w-3" />
            </Button>
          </div>
        ),
        cell: (info) => {
          const value = info.getValue() as number
          return (
            <div className="text-right font-semibold text-foreground">
              ${value.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>
          )
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (info) => {
          const status = info.getValue() as string
          return (
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                status === "Completed"
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/20 dark:text-emerald-400"
                  : status === "Pending"
                  ? "bg-amber-50 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400"
                  : "bg-rose-50 text-rose-700 dark:bg-rose-950/20 dark:text-rose-400"
              }`}
            >
              {status === "Completed" ? (
                <Check className="h-3 w-3" />
              ) : status === "Pending" ? (
                <Clock className="h-3 w-3" />
              ) : (
                <AlertCircle className="h-3 w-3" />
              )}
              {status}
            </span>
          )
        },
      },
    ],
    []
  )

  const table = useReactTable({
    data: mockTransactions,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  return (
    <div className="space-y-4">
      {/* Table header operations */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="pl-9 h-9 w-full"
          />
        </div>
        <div className="text-xs text-muted-foreground">
          Showing {table.getRowModel().rows.length} of {mockTransactions.length} entries
        </div>
      </div>

      {/* Styled Responsive Table */}
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-muted/50 border-b border-border text-muted-foreground font-semibold">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="p-4 align-middle">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-border/60">
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="hover:bg-muted/20 transition-colors">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="p-4 align-middle">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="p-8 text-center text-muted-foreground">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center justify-between border-t border-border/40 pt-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-8 gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="h-8 gap-1"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-xs text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
      </div>
    </div>
  )
}
