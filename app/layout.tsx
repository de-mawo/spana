import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import '../styles/responsive.scss';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
