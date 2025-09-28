export default function HeroSection() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-4">Unpack Your Style</h1>
      <p className="text-lg text-muted mb-6">
        Túi xách của chúng tôi được thiết kế để kết hợp phong cách vượt thời gian với chức năng sử dụng hàng ngày, đảm bảo bạn luôn sẵn sàng.
      </p>
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary-foreground hover:text-primary transition">
          See all
        </button>
        <button className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition">
          Play Video
        </button>
      </div>
    </section>
  );
}