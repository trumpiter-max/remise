import asyncio
import os
import json
import re
from sydney import SydneyClient

os.environ["BING_COOKIES"] = "_C_Auth=; _C_Auth=; MUID=1E4E73B20BEA649929E767310A8C65FB; MUIDB=1E4E73B20BEA649929E767310A8C65FB; _EDGE_S=F=1&SID=19F1293B33B76142117C3DB832D160CD; _EDGE_V=1; USRLOC=HS=1; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=E2C7DC2505D34601B0391A8A3EEBAF40&dmnchg=1; WLS=C=a7f5df7a360f3724&N=Bill; _U=1SBg-6L0xWQjILTnLfkjr0YwxetFG89TKtLV907DXdGXLyhCdtkHo7Pe_QGlM6y9u7c4jE9uB4eEeOlAhVGY5IEJ81RqO_5VhYLkC9mJt2FMVtiPFr2df_RqXolIDwpbUkiONJKyYMpnElhUAVmPW5UV0bwfG08FaF5_GiyuCJM36ohHmz3wI0eevMfagiwO_c-KTOJv5_-439-PZqx6nbA; ANON=A=D32A8CDECE041FA3AC779563FFFFFFFF; ak_bmsc=C6F775D09C5CFF86DCB77F9989152E45~000000000000000000000000000000~YAAQhwqrcS0yUHiPAQAA+zlWiRf440Apw5Ju1mSAizEpMzxoHEK776ZAy1+ltoecvkyjUxmsE2nAMpSyiHstZHqFBeazram1gt6jn9q2XiAFXjZW7BbzaOFFH4YGf81Emd3eCtdW5g7j41HFkvycDaLi3X30o3FgcAs2h/I6Cz9n5tx8w8bxRoUpU2K54tVBwX8YjQ1E7NF7/pzTTkYgs7qDmiMSXFiKRZ4FwIo31NhCgZNJlqSJIEqo4+rTtd595KDsMN3udp/UP8fOtpGEA8pA21aHydAxzVJFW06RNHGIlW9GOzyJEAVTv+vYgutglmHZtX0S7AugdwLsMj750W9MuToRYnoqjpbRU167kp9HddKkUI4yfB5Vk6OvkCRGntpvrAz9E6UPmObMDQ==; _C_Auth=; _Rwho=u=d&ts=2024-05-18; _SS=SID=19F1293B33B76142117C3DB832D160CD&R=0&RB=0&GB=0&RG=0&RP=0; SRCHUSR=DOB=20240518&T=1715996125000; _uetsid=e8e4d7b014b611ef88e295fad487503b; _uetvid=e8e4f03014b611efa66771eb0e4085ad; SRCHHPGUSR=SRCHLANG=en&PV=15.0.0&BRW=HTP&BRH=M&CW=934&CH=742&SCW=1204&SCH=796&DPR=1.3&UTC=420&DM=1&CIBV=1.1742.1&HV=1715996242&PRVCW=934&PRVCH=742; _RwBf=mta=0&rc=0&rb=0&gb=0&rg=0&pc=0&mtu=0&rbb=0.0&g=0&cid=&clo=0&v=6&l=2024-05-17T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&ard=0001-01-01T00:00:00.0000000&rwdbt=0001-01-01T16:00:00.0000000-08:00&rwflt=0001-01-01T16:00:00.0000000-08:00&o=0&p=MSAAUTOENROLL&c=MR000T&t=6140&s=2024-05-18T01:28:17.0389921+00:00&ts=2024-05-18T01:37:24.1405872+00:00&rwred=0&wls=2&wlb=0&wle=0&ccp=2&cpt=0&lka=0&lkt=0&aad=0&TH=&e=0IADbibHZy8H8l_n4mSmFyDSCo897tljCaAX6dITlWIOYZUNX6VWG78YdbZv9Bw8biRZjwj9yUAraVtIObz1Vg; bm_sv=756398CE0CE13E157CB18FAA5507860A~YAAQhwqrcb5aUHiPAQAA1bhYiRcQ2OlecYK829RaHP3wWrIJ6Oq9tFWIlnhq2hJoOjjSkgL7rx6B4WgzJBl/oSuCZLPL3awbKBcHKG9DPp/lyba5iORer0A42vNwOQ3g958fQ+syrEESRx89OEALKp4mwaYs2TzUOa2GXCRmaFR/UEU+Hs1/C6g+3DW67ynGSMJCyUt+xKPr0Q3hp7kjftvnvioA+fl/1Fr9ul2n3Aq4PZH7ZiZspO6qRoMxutF0zHm9sQ==~1"

async def rank_brand(category, brand_list, location, features) -> None:
    prompt = f"Rank the following brands {brand_list} of {category} in {location} based on their popularity, then show me in formmat of json including {features}, number of sale, pros and cons, and the price range. Show them in short answer"
    async with SydneyClient(style="precise") as sydney:
        response = await sydney.ask(prompt, search=True, citations=False)
        start = response.find("[")
        end = response.rfind("]")
        json_string = response[start:end+1]
        json_string =  re.sub(r'\[\^.*?\^\]', '', json_string)
        result = json.loads(json_string)
        return result

# Test function
# asyncio.run(rank_brand("smart phone", ["Apple", "Samsung", "Google", "Huawei", "Xiaomi"], "United States", "camera quality"))