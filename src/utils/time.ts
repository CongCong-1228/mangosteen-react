type Parts = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
};

type Unit = "year" | "month" | "day" | "hour" | "minute" | "second";

export class Time {
  date: Date;
  constructor(date?: string | number | Date) {
    this.date = date ? new Date(date) : new Date();
  }
  getFormat(pattern = "yyyy-MM-dd hh:mm:ss") {
    return pattern
      .replace("/yyyy/g", this.year.toString())
      .replace("/MM/g", this.month.toString().padStart(2, "0"))
      .replace("/dd/g", this.day.toString().padStart(2, "0"))
      .replace("/hh/g", this.hour.toString().padStart(2, "0"))
      .replace("/mm/g", this.minute.toString().padStart(2, "0"))
      .replace("/ss/g", this.second.toString().padStart(2, "0"));
  }

  add(n: number, unit: Unit) {
    const table = {
      year: "year",
      month: "month",
      day: "day",
      hour: "hour",
      minute: "minute",
      second: "second",
    } as const;
    this[table[unit]] += n;
    return this;
  }

  get parts(): Parts {
    const year = this.date.getFullYear();
    const month = this.date.getMonth() + 1;
    const day = this.date.getDate();
    const hour = this.date.getHours();
    const minute = this.date.getMinutes();
    const second = this.date.getSeconds();
    return { year, month, day, hour, minute, second };
  }

  set parts(p: Partial<Parts>) {
    const table = {
      year: "setFullYear",
      month: "setMonth",
      day: "setDate",
      hour: "setHours",
      minute: "setMinutes",
      second: "setSeconds",
    } as const;
    Object.entries(p).forEach(([key, value]) => {
      const k = key as keyof typeof p;
      const methodName = table[k];
      value = k === "month" ? (value as number) - 1 : value;
      this.date[methodName](value);
    });
  }
  get year() {
    return this.parts.year;
  }
  set year(value: number) {
    this.parts = { year: value };
  }
  get month() {
    return this.parts.month;
  }
  set month(value: number) {
    this.parts = { month: value };
  }
  get day() {
    return this.parts.day;
  }
  set day(value: number) {
    this.parts = { day: value };
  }
  get hour() {
    return this.parts.hour;
  }
  set hour(value: number) {
    this.parts = { hour: value };
  }
  get minute() {
    return this.parts.minute;
  }
  set minute(value: number) {
    this.parts = { minute: value };
  }
  get second() {
    return this.parts.second;
  }
  set second(value: number) {
    this.parts = { second: value };
  }
}
