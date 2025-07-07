'use client'

import { useState } from "react"
import { quotes } from "@/lib/quotes"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [topic, setTopic] = useState("")
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([])

  const handleSubmit = () => {
    const matches = quotes
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.quote)

    setFilteredQuotes(matches)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 bg-gray-50">
      <h1 className="text-3xl font-bold">Quote Generator</h1>

      <div className="flex gap-2 w-full max-w-md">
        <Input
          placeholder="Enter a topic (e.g. life, inspiration)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <Button onClick={handleSubmit}>Get Quotes</Button>
      </div>

      <div className="grid gap-4 mt-6 w-full max-w-xl">
        {filteredQuotes.map((quote, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p>{quote}</p>
            </CardContent>
          </Card>
        ))}

        {filteredQuotes.length === 0 && (
          <p className="text-gray-500 text-center">No quotes to display</p>
        )}
      </div>
    </main>
  )
}
