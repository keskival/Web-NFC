package fi.neter.webnfc;

import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RestController {
	public static Random random = new Random();
	
    /**
     * Logs the given NFC content to console and returns a suggested random content to write back.
     * @param content
     * @return
     */
	@RequestMapping("/notifyNFC")
	@ResponseBody
	public String notifyNFC(String content) {
		System.out.println("Received NFC: " + content + "\n");
    	Integer randomInteger = random.nextInt();
    	String result = "NFC ID: " + randomInteger;
    	return result;
    }
}
