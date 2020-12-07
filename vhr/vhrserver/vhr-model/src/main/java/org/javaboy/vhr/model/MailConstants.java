package org.javaboy.vhr.model;

public class MailConstants {
    public static final Integer DELIVERING = 0; // Message delivery
    public static final Integer SUCCESS = 1; // Message delivered successfully
    public static final Integer FAILURE = 2; // Message delivery failed
    public static final Integer MAX_TRY_COUNT = 3; // Maximum number of retries

    public static final Integer MSG_TIMEOUT = 1; // Message timeout

    public static final String MAIL_QUEUE_NAME = "javaboy.mail.queue";
    public static final String MAIL_EXCHANGE_NAME = "javaboy.mail.exchange";
    public static final String MAIL_ROUTING_KEY_NAME = "javaboy.mail.routing.key";
}
