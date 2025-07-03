interface SimpleMapProps {
  lat: number;
  lng: number;
  name: string;
}
export default function SimpleMap({ lat, lng, name }: SimpleMapProps) {
  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="w-full h-[400px] border border-primary-500 rounded-lg overflow-hidden mt-4">
      <iframe
        title={`Map of ${name}`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
