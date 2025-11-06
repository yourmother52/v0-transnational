"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type AccordionType = "single" | "multiple"

interface AccordionContextValue {
  type: AccordionType
  openItems: string[]
  toggleItem: (value: string) => void
  collapsible?: boolean
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

function useAccordion() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion")
  }
  return context
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type: AccordionType
  collapsible?: boolean
  defaultValue?: string | string[]
}

function Accordion({ type, collapsible = false, defaultValue, children, className, ...props }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
    }
    return []
  })

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        if (type === "single") {
          if (prev.includes(value)) {
            return collapsible ? [] : prev
          }
          return [value]
        } else {
          if (prev.includes(value)) {
            return prev.filter((item) => item !== value)
          }
          return [...prev, value]
        }
      })
    },
    [type, collapsible],
  )

  return (
    <AccordionContext.Provider value={{ type, openItems, toggleItem, collapsible }}>
      <div data-slot="accordion" className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  return (
    <div data-slot="accordion-item" data-value={value} className={cn("border-b last:border-b-0", className)} {...props}>
      {children}
    </div>
  )
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordion()
  const value = (props as any)["data-value"] || ""
  const isOpen = openItems.includes(value)

  // Get the value from the parent AccordionItem
  const itemElement = React.useRef<HTMLButtonElement>(null)
  const [itemValue, setItemValue] = React.useState("")

  React.useEffect(() => {
    const item = itemElement.current?.closest("[data-value]")
    if (item) {
      setItemValue(item.getAttribute("data-value") || "")
    }
  }, [])

  const handleClick = () => {
    if (itemValue) {
      toggleItem(itemValue)
    }
  }

  const isItemOpen = openItems.includes(itemValue)

  return (
    <div className="flex">
      <button
        ref={itemElement}
        type="button"
        data-slot="accordion-trigger"
        data-state={isItemOpen ? "open" : "closed"}
        onClick={handleClick}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
            isItemOpen && "rotate-180",
          )}
        />
      </button>
    </div>
  )
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

function AccordionContent({ className, children, ...props }: AccordionContentProps) {
  const { openItems } = useAccordion()
  const [itemValue, setItemValue] = React.useState("")
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const item = contentRef.current?.closest("[data-value]")
    if (item) {
      setItemValue(item.getAttribute("data-value") || "")
    }
  }, [])

  const isOpen = openItems.includes(itemValue)

  return (
    <div
      ref={contentRef}
      data-slot="accordion-content"
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "overflow-hidden text-sm transition-all duration-200",
        isOpen ? "animate-accordion-down" : "animate-accordion-up",
      )}
      style={{
        display: isOpen ? "block" : "none",
      }}
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
