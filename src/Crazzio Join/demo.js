const NoOflangs = [1]

    const LangList = NoOflangs.map((languages) =>
        <div className="space-x-8 space-y-1 flex">
            
            <p className="text-gray-800 font-medium text-lg mt-3">Language 1</p>
            
            <select onChange={onchangelang} id="lang1" name="lang1" className="max-w-max bg-gray-100 h-12 outline-none text-lg rounded-md focus:rounded-b-none font-normal p-2">
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Choose a language</option>
                {/*Languages list*/}
                {Languages}
            </select>

            {/*native language or non native*/}
            <select onChange={onchangelang_mode} id="lang1" name="lang1" className="max-w-max bg-gray-100 h-12 outline-none text-lg rounded-md focus:rounded-b-none font-normal p-2">
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Native Language</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Non-native Language</option>                                                                        
            </select>

            {/*Eloquent or */}
            <select onChange={onchangelang_speaking} id="lang1" name="lang1" className="max-w-max bg-gray-100 h-12 outline-none text-lg rounded-md focus:rounded-b-none font-normal p-2">
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >No proficiency</option>
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Elementary proficiency</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Limited working proficiency.</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Professional working proficiency</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Full professional proficiency</option>                                                                        
                <option className="text-lg bg-gray-100 font-medium text-gray-700" >Native / bilingual proficiency</option>                                                                                                                                           
            </select>
        </div>
     )