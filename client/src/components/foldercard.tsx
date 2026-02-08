
export function FolderCard({ children }: { children?: React.ReactNode }) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-10">
        <div className="relative w-80">
          {/* Folder tab */}
          <div className="absolute -top-6 left-6 w-28 h-10 bg-gray-300 rounded-t-xl shadow-md" />
  
          {/* Folder body */}
          <div className="bg-gray-300 rounded-2xl shadow-xl border border-gray-400 p-6 pt-8">
            {children || (
              <div className="text-gray-700 font-semibold">
                Folder Content
              </div>
            )}
          </div>
  
        </div>
      </div>
    );
  }