package fi.neter.webnfc;

import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Controller
public class RestController {
	public static Random random = new Random();

    /**
     * Logs the given NFC content to console and returns a suggested random content to write back.
     * @param content
     * @return
     */
	@RequestMapping(value = "/notifyNFC", method = RequestMethod.POST)
	@ResponseBody
	public ObjectNode notifyNFC(String content) {
		ObjectNode node = JsonNodeFactory.instance.objectNode();
		System.out.println("Received NFC: " + content + "\n");
    	Integer randomInteger = random.nextInt();
    	node.put("id", "NFC ID: " + randomInteger);
    	return node;
    }
}
