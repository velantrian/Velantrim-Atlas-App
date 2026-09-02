import { useEffect, useRef, useState } from "react";
import { LoaderCircle, Square, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { speakAltair } from "@/lib/speak";
import { cn } from "@/lib/utils";

type Status = "idle" | "load" | "play" | "err";

export function SpeakButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const { lang } = useI18n();
  const [status, setStatus] = useState<Status>("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current?.pause();
    audioRef.current = null;
    setStatus("idle");
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [text, lang]);

  async function toggle() {
    if (status === "play") {
      audioRef.current?.pause();
      audioRef.current = null;
      setStatus("idle");
      return;
    }
    if (status === "load") return;
    setStatus("load");
    try {
      const res = await speakAltair({ data: { text, lang } });
      if (!res.ok) {
        setStatus("err");
        return;
      }
      const url = `data:audio/mpeg;base64,${res.b64}`;
      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => setStatus("idle");
      audio.onerror = () => setStatus("err");
      await audio.play();
      setStatus("play");
    } catch {
      setStatus("err");
    }
  }

  const label =
    status === "load"
      ? "Altair…"
      : status === "play"
        ? lang === "ru"
          ? "Стоп"
          : "Stop"
        : status === "err"
          ? lang === "ru"
            ? "Нет голоса"
            : "No voice"
          : "Altair";

  return (
    <Button
      type="button"
      variant={status === "play" ? "primary" : "outline"}
      size="sm"
      onClick={toggle}
      disabled={status === "load"}
      className={cn("shrink-0", className)}
      aria-label={lang === "ru" ? "Озвучить голосом Altair" : "Speak with Altair"}
    >
      {status === "load" ? (
        <LoaderCircle className="size-3.5 animate-spin" />
      ) : status === "play" ? (
        <Square className="size-3 fill-current" />
      ) : (
        <Volume2 className="size-3.5" />
      )}
      {label}
    </Button>
  );
}
