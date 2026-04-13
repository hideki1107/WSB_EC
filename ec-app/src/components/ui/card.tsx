import * as React from "react"

import { cn } from "@/lib/utils"

type CardProps = React.ComponentProps<"div">

function Card(props: CardProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
        className
      )}
      {...rest}
    />
  )
}

function CardHeader(props: CardProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...rest}
    />
  )
}

function CardTitle(props: CardProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...rest}
    />
  )
}

function CardDescription(props: CardProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...rest}
    />
  )
}

function CardAction(props: CardProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...rest}
    />
  )
}

function CardContent(props: CardProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...rest}
    />
  )
}

function CardFooter(props: CardProps) {
  const { className, ...rest } = props

  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...rest}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
