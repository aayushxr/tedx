"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";

interface Member {
  name: string;
  role: string;
}

interface Department {
  id: number;
  name: string;
  image: string;
  members: Member[];
}

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const MobileDrawer = () => (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className="w-full text-center">
          <Image
            src={department.image}
            alt={`${department.name} team`}
            width={300}
            height={200}
            className="w-full h-48 object-scale-down p-4"
          />
          <h2 className="text-xl  font-semibold p-4 ">{department.name}</h2>
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{department.name} Members</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4">
          <Image
            src={department.image}
            alt={department.name}
            className="w-full"
            width={1000}
            height={1000}
          />
          <div className="grid grid-cols-2">
            {department.members.map((member, index) => (
              <div key={index} className="mb-4 ">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );

  const DesktopDialog = () => (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="w-full text-center">
          <Image
            src={department.image}
            alt={`${department.name} team`}
            width={300}
            height={200}
            className="w-full h-48 object-scale-down"
          />
          <h2 className="text-xl  font-semibold p-4 font-mono">
            {department.name}
          </h2>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{department.name} Team Members</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={department.image}
            alt={department.name}
            className="w-full"
            width={1000}
            height={1000}
          />
          <div className="grid grid-cols-2">
            {department.members.map((member, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {isMobile ? <MobileDrawer /> : <DesktopDialog />}
      </CardContent>
    </Card>
  );
}
