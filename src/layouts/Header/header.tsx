 import { Input } from "reactstrap";
 import Logo from "../../components/Logo/logo";


 interface HeaderProps {
  onSearch: (query: string) => void;
 }

export default function Header({onSearch} : HeaderProps) {
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
    
   if (e.key === "Enter" && e.currentTarget.value.length > 2) {
    onSearch(e.currentTarget.value);
   }
  }

  return (
    <>
    <header className = 'bg-blue-500 w-full max-h-[250px] p-4'>
      <div className = 'mx-auto flex justify-between items-center '>
        <Logo/>
        <Input
          type="search"
          placeholder="Search..."
          className="w-96"
          onKeyDown={(e) => handleSearch(e)}
        />
      </div> 
    </header>
    </>
  )
}
