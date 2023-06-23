'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'

export type AQIDatum = {
  source: 'nyccas' | 'DEC'
  timestamp: Date
  time: string
  value: string
}

export const columns: ColumnDef<AQIDatum>[] = [
  {
    accessorKey: 'time',
    header: 'Time',
  },
  {
    accessorKey: 'value',
    header: 'Value',
  },
  {
    accessorKey: 'timestamp',
    header: ({ column }) => {
      console.log('hit')
      console.log(column.getIsSorted())
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
